
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



// utility for working with inputs =============== //

// utility for checking the validity of function - //
// arguments ------------------------------------- //
export function isValidDataType(
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