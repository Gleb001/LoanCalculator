
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


// utility for working with numbers ============== //

// get a number from the string ------------------ //
export function getNumber({
    string_value = "any_string",
    rounding_number = 0
}) {

    // quick check of string_value for the presence of a number
    if (
        !isNaN(Number(string_value))    &&
        typeof string_value == "string" &&
        typeof rounding_number == "number"
    ) {
        return Number(
            parseFloat(Number(string_value)).toFixed(rounding_number)
        );
    }

    // checking the validity of the types of specified arguments
    if (
        !isValidDataType(string_value, "string") ||
        !isValidDataType(rounding_number, "number")
    ) return;

    // getting a number from a string
    let regular_expression = /[\d+\.\d+]/g;
    let string_number = String(string_value).match(regular_expression).join("");
    if (string_number == "") {
        return 0;
    } else {
        return Number(
            parseFloat(string_number).toFixed(
                rounding_number
            )
        );
    }

}

// set a comma separator ------------------------- //
export function setCommaSeparators(number_value) {

    // checking the validity of the types of specified arguments
    if(!isValidDataType(number_value, "number")) return;

    // put separating commas in the number
    let array_number = String(number_value).split("");
    let index_number_before_comma =
        _getIndexNumberBeforeComma(number_value);

    for (
        index_number_before_comma;
        index_number_before_comma > 0;
        index_number_before_comma -= 3
    ) {

        array_number.splice(
            index_number_before_comma,
            0,
            ","
        );

    }

    return String(array_number.join(""));

}
function _getIndexNumberBeforeComma(number) {

    let string_number = String(number);
    let index_point = string_number.indexOf(".");

    if (index_point != -1) {
        return index_point - 3;
    } else {
        return string_number.length - 3;
    }

}

// add a quantitative prefix to a number --------- //
export function addNumberQuantitativePrefix(number_value) {

    // checking the validity of the types of specified arguments
    if(isValidDataType(number_value, "number")) return;

    // add a quantitative prefix to a number
    let result = number_value;
    let number_in_module = Math.abs(number_value);

    if (number_in_module >= 1e3) {
        result = Math.round(number_value / 1e3) + " тыс.";
    }
    if (number_in_module >= 1e6) {
        result = Math.round(number_value / 1e6) + " млн.";
    }
    if (number_in_module >= 1e9) {
        result = Math.round(number_value / 1e9) + " млрд.";
    }

    return result;

}

// check for range ------------------------------- //
export function checkForRange({
    check_value,
    min_number = 0,
    max_number = 0,
}) {

    // checking the validity of the types of specified arguments
    if (
        !isValidDataType(check_value, "number") ||
        !isValidDataType(min_number, "number")  ||
        !isValidDataType(max_number, "number" )
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
