
// Copyright (c) 2022 Lichagin G.I.

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.



// built-in utilities ============================ //

// utility for checking the validity of function - //
// arguments ------------------------------------- //
function isValidDataType(
    value_variable,
    check_type_variable
) {

    if (!_isDataType(check_type_variable)) {
        console.log(
            Error(
                'Аргумент ' + check_type_variable +
                ' не является конкретным (проверяющим)' +
                ' типом данных. Проверяющиий тип данных' +
                ' должен быть заключен в двойные кавычки' +
                ' и содеражать внутри двойных кавычек тип' +
                ' данных, например: "undefined" или "number".'
            )
        );
        return false;
    }
    if (typeof value_variable !== check_type_variable) {
        console.log(
            Error(
                "Заданная переменная не является типом данных: " + 
                typeof check_type_variable + "." +
                " Заданная переменная является типом данных: " +
                typeof value_variable + "."
            )
        );
        return false;
    }

    return true;

}
function _isDataType(check_data_type) {

    let all_types = [
        "number", "boolean", "string",
        "bigint", "function", "object",
        "symbol", "undefined"
    ];

    let result = false;
    all_types.forEach(type => {
        if (check_data_type === type) result = true;
    });
    return result;

}

// add a quantitative prefix to a number --------- //
function addNumberQuantitativePrefix(number_value) {

    // checking the validity of the types of specified arguments
    if (!isValidDataType(number_value, "number")) return;

    // add a quantitative prefix to a number
    let number_in_module = Math.abs(number_value);
    let prefix = "";
    let divider = 1;

    if (number_in_module >= 1e9) {
        prefix = " млрд.";
        divider = 1e9;
    } else if(number_in_module >= 1e6) {
        prefix = " млн.";
        divider = 1e6;
    } else if(number_in_module >= 1e3) {
        prefix = " тыс.";
        divider = 1e3;
    }

    return parseFloat(number_value / divider, 1) + prefix;

}

// check for range ------------------------------- //
function checkForRange({
    check_value,
    min_number,
    max_number,
}) {

    // checking the validity of the types of specified arguments
    if (
        !isValidDataType(check_value, "number") ||
        !isValidDataType(min_number, "number")  ||
        !isValidDataType(max_number, "number")
    ) return;

    // check the number for entering the specified range
    if (check_value < min_number) {
        return min_number;
    } else if (check_value > max_number) {
        return max_number;
    } else {
        return check_value;
    }

}


// utility for working with inputs =============== //

// it is a input element ------------------------- //
export function isInputElement(check_element) {

    if (!document.body.contains(check_element)) {
        console.log(
            Error(
                "Переменная " + name_check_element +
                " не является HTML-элементом!. Так" +
                " данная переменная содержит: " +
                check_element
            )
        );
        return;
    }

    if (check_element.tagName == 'INPUT') {
        return true;
    } else {
        return false;
    }

}

// change a input value -------------------------- //
export function changeInputValue({
    input_element,
    new_value,
    prefix = ""
}) {

    // checking the validity of the types of specified arguments
    if (
        !isInputElement(input_element) ||
        (
            typeof new_value != "number" &&
            typeof new_value != "string"
        )
    ) return;

    if (typeof prefix != "string") prefix = "";

    input_element.value = new_value + prefix;

}

// create a label slider for an input ------------ //
export function createSliderLabels({
    slider_element,
    number_slider_labels,
    class_slider_labels = ""
}) {

    // checking the validity of the types of specified arguments
    if (
        !isInputElement(slider_element) ||
        !isValidDataType(number_slider_labels, "number")
    ) return;

    if (typeof class_slider_labels != 'string') {
        class_slider_labels = "";
    }

    // create a container for a slider labels
    let container_for_slider_labels = _createContainerForSLiderLabels();

    // get attributes slider
    let max_value_slider = Number(slider_element.getAttribute("max"));
    let min_value_slider = Number(slider_element.getAttribute("min"));
    let step_slider = Number(slider_element.getAttribute("step"));
    let width_slider = slider_element.clientWidth - 15;

    // get step_between_labels and width_step_slider
    number_slider_labels = checkForRange({
        check_value: number_slider_labels,
        min_number: 0,
        max_number: Math.floor(width_slider / 60)
    });
    let number_steps = (max_value_slider - min_value_slider) / step_slider;
    let step_between_labels = Math.round(number_steps / --number_slider_labels);
    let number_last_slider_label = step_between_labels * number_slider_labels;
    let width_step_slider = width_slider / number_steps;

    // creating slider labels in the container
    for (
        let number_steps_label = 0;
        number_steps_label <= number_last_slider_label;
        number_steps_label += step_between_labels
    ) {

        let value_label = checkForRange({
            check_value: number_steps_label * step_slider,
            min_number: min_value_slider,
            max_number: max_value_slider
        });
        let position_left_slider = checkForRange({
            check_value: ((number_steps_label - 1) * width_step_slider),
            min_number: 0,
            max_number: (number_steps * width_step_slider)
        });

        let slider_label = _createSliderLabel({
            value: value_label,
            position_left_slider: position_left_slider,
            class_slider_label: class_slider_labels
        });

        container_for_slider_labels.append(slider_label);

    }

    return container_for_slider_labels;

}
function _createContainerForSLiderLabels() {

    let container_for_slider_labels = document.createElement("div");
    container_for_slider_labels.className = "container_for_slider_labels";
    container_for_slider_labels.style.position = "relative";

    return container_for_slider_labels;

}
function _createSliderLabel({
    value,
    position_left_slider,
    class_slider_label
}) {

    let slider_label = document.createElement("span");
    slider_label.style.width = 16 + "px";
    slider_label.style.position = "absolute";
    slider_label.style.left = position_left_slider + "px";
    slider_label.className = class_slider_label;
    slider_label.dataset.value = value;
    slider_label.innerHTML = addNumberQuantitativePrefix(
        Number(value)
    );

    return slider_label;

}
