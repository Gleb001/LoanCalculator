
// imports ======================================= //

// utilities ------------------------------------- //
import {
    changeInputValue
} from "../utilities/work_with_inputs.js";

// constants ===================================== //
const disabled_inputs = {
    pricelog: {
        self: document.getElementById("pricelog"),
        rounding_number: 2
    },
    percentages: {
        self: document.getElementById("percentages"),
        rounding_number: 1
    }
};

// main ========================================== //
(function setDefaultSettingsForDisabledInputs() {

    changeInputValue({
        input_element: disabled_inputs.pricelog.self,
        new_value: "100,000",
        prefix: disabled_inputs.pricelog.self.dataset.prefix
    });
    changeInputValue({
        input_element: disabled_inputs.percentages.self,
        new_value: 1,
        prefix: disabled_inputs.percentages.self.dataset.prefix
    });

})();


// export ======================================== //
export { disabled_inputs };
