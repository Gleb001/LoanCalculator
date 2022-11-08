
// imports ======================================= //

// elements -------------------------------------- //
import {
    disabled_inputs
} from "./disabled_inputs.js"

// utilities ------------------------------------- //
import {
    checkForRange,
    getNumber,
    setCommaSeparators
} from "../utilities/work_with_number.js";

import {
    changeInputValue,
    createSliderLabels
} from "../utilities/work_with_inputs.js";


// constants ===================================== //
const inputs_with_sliders = {
    price_input: {
        self: document.getElementById('price'),
        rounding_number: 2,
        slider: {
            self: document.getElementById("priceSlider"),
            labels: {
                number: 14,
                css_class: "priceLabel lb",
            }
        },
    },
    term_input: {
        self: document.getElementById('term'),
        rounding_number: 0,
        slider: {
            self: document.getElementById("termSlider"),
            labels: {
                number: 11,
                css_class: "termLabel lb"
            }
        },
    }
};


// main ========================================== //

// set default attributes for inputs with sliders  //
(function setDefaultSettingsForInputsWithSliders() {

    for (let input_name in inputs_with_sliders) {

        let input = inputs_with_sliders[input_name];

        _setDefaultValuesForInput(input);
        _setDefaultValuesForSlider(input);

    }

})();

function _setDefaultValuesForInput(input) {

    let input_element = input.self;
    let slider_element = input.slider.self;
    let rounding_number = input.rounding_number;

    changeInputValue({
        input_element: input_element,
        new_value: slider_element.min,
        prefix: input_element.dataset.prefix
    });

    input_element.addEventListener(
        "click",
        function _prepareForEnterNewValue() {
            this.value = getNumber({
                string_value: this.value,
                rounding_number: rounding_number
            });
        }
    );
    input_element.addEventListener(
        "blur",
        function checkEnteredValue() {

            let new_value = getNumber({
                string_value: this.value,
                rounding_number: rounding_number
            });

            new_value = checkForRange({
                check_value: new_value,
                min_number: Number(slider_element.min),
                max_number: Number(slider_element.max),
            });

            changeInputValue({
                input_element: slider_element,
                new_value: new_value
            });
            changeInputValue({
                input_element: this,
                new_value: new_value,
                prefix: this.dataset.prefix
            });

            _changePricelogValue();

        }
    );

}

function _setDefaultValuesForSlider(input) {

    let input_element = input.self;
    let slider_element = input.slider.self;
    let number_labels = input.slider.labels.number;
    let css_class_labels = input.slider.labels.css_class;

    let conrainer_for_labels = createSliderLabels({
        slider_element: slider_element,
        number_slider_labels: number_labels,
        class_slider_labels: css_class_labels
    });
    slider_element.after(conrainer_for_labels);

    slider_element.addEventListener(
        "input",
        function () {
            changeInputValue({
                input_element: input_element,
                new_value: this.value,
                prefix: input_element.dataset.prefix
            });
            _changePricelogValue(input);
        }
    );
    conrainer_for_labels.childNodes.forEach(label => {

        label.addEventListener(
            "click",
            function () {

                changeInputValue({
                    input_element: input_element,
                    new_value: this.dataset.value,
                    prefix: input_element.dataset.prefix
                });
                changeInputValue({
                    input_element: slider_element,
                    new_value: this.dataset.value
                });

                _changePricelogValue(input);

            }
        );

    });

}

function _changePricelogValue() {

    let price_input = inputs_with_sliders.price_input;
    let term_input = inputs_with_sliders.term_input;

    let price = getNumber({
        string_value: price_input.self.value,
        rounding_number: price_input.rounding_number
    });
    let time = getNumber({
        string_value: term_input.self.value,
        rounding_number: term_input.rounding_number
    });

    let value_percentages = 1;
    if (price >= 1e6) value_percentages = 1.1;

    let monthly_payment = _getMonthlyPayment(
        price, time, value_percentages
    );
    monthly_payment = setCommaSeparators(monthly_payment);

    changeInputValue({
        input_element: disabled_inputs.pricelog.self,
        new_value: monthly_payment,
        prefix: disabled_inputs.pricelog.self.dataset.prefix
    });
    changeInputValue({
        input_element: disabled_inputs.percentages.self,
        new_value: value_percentages,
        prefix: disabled_inputs.percentages.self.dataset.prefix
    });


}

function _getMonthlyPayment(price, months, percentages) {

    if (
        typeof price != 'number' ||
        typeof months != 'number' ||
        typeof percentages != 'number'
    ) return;

    if (price > 0 && months > 0 && percentages > 0) {
        let monthly_payment = (price * percentages) / months;
        return Number(monthly_payment.toFixed(2));
    } else {
        return 0;
    }

}


// export
export { inputs_with_sliders };
