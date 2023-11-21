
    document.addEventListener('DOMContentLoaded', function () {
        var inverterPowerRadios = document.getElementsByName('Select-the-inverter-power');
        var inverterPowerVRadios = document.getElementsByName('Select-the-inverter-power-V2');
        var inverterPowerSpan = document.getElementById('inverter_power');
        var buttonCalculator = document.getElementById('Calculator');
        var buttonCalculator_1 = document.getElementById('Calculator_1');

        buttonCalculator.addEventListener('click', function () {
            updateInverterPower(inverterPowerRadios);
        });

        buttonCalculator_1.addEventListener('click', function () {
            updateInverterPower(inverterPowerVRadios);
        });

        function updateInverterPower(radioButtons) {
            for (var i = 0; i < radioButtons.length; i++) {
                if (radioButtons[i].checked) {
                    inverterPowerSpan.innerHTML = 'Потужність інвертора:&nbsp; <strong>' + radioButtons[i].value + '</strong>';
                    break;
                }
            }
        }
    });

    document.addEventListener('DOMContentLoaded', function () {
        var locationPVSystemSpan = document.getElementById('location_PV_system');
        var inverterPhasesRadios = document.getElementsByName('Select-the-number-of-inverter-phases');
        var inverterPowerRadios = document.getElementsByName('Select-the-inverter-power');
        var inverterPowerVRadios = document.getElementsByName('Select-the-inverter-power-V2');
        var powerPVModulesRadios = document.getElementsByName('Select-the-power-of-photovoltaic-modules');
        var batteryCapacityRadios = document.getElementsByName('Selection-of-battery-capacity');
        var numberInverterPhasesSpan = document.getElementById('number_inverter_phases');
        var inverterPowerSpan = document.getElementById('inverter_power');
        var powerPVModulesSpan = document.getElementById('power_PV_modules');
        var batteryCapacitySpan = document.getElementById('battery_capacity');
        var buttonNext = document.querySelectorAll('.button-next');
        var batteryButton = document.getElementById('battery');

        buttonNext.forEach(function (button) {
            button.addEventListener('click', function () {
                updateResults(button);
            });
        });

        batteryButton.addEventListener('click', function () {
            updateBatteryCapacity();
        });

        function updateResults(button) {
            var index = Array.from(buttonNext).indexOf(button);
            if (index === 0) {
                updateLocationPVSystem();
            } else if (index === 1) {
                updateNumberInverterPhases();
            } else if (index === 2) {
                updateInverterPower();
            } else if (index === 3) {
                updatePowerPVModules();
            } else if (index === 4) {
                // Do nothing here, updateBatteryCapacity is called separately by the 'battery' button
            }
        }

        function updateLocationPVSystem() {
            var radioButtons = document.getElementsByName('Location-of-photovoltaic-modules');
            for (var i = 0; i < radioButtons.length; i++) {
                if (radioButtons[i].checked) {
                    locationPVSystemSpan.innerHTML = 'Місце розташування ФЕМ:&nbsp; <strong>' + radioButtons[i].value + '</strong>';
                    break;
                }
            }
        }

        function updateNumberInverterPhases() {
            for (var i = 0; i < inverterPhasesRadios.length; i++) {
                if (inverterPhasesRadios[i].checked) {
                    numberInverterPhasesSpan.innerHTML = 'Кількість фаз інвертора:&nbsp; <strong>' + inverterPhasesRadios[i].value + '</strong>';
                    break;
                }
            }
        }

        function updateInverterPower() {
            var selectedPowerRadio = getSelectedRadioValue(inverterPowerRadios, inverterPowerVRadios);
            inverterPowerSpan.innerHTML = 'Потужність інвертора:&nbsp; <strong>' + selectedPowerRadio + '</strong>';
        }

        function updatePowerPVModules() {
            var selectedPowerPVModulesRadio = getSelectedRadioValue(powerPVModulesRadios);
            powerPVModulesSpan.innerHTML = 'Потужність фотомодулів:&nbsp; <strong>' + selectedPowerPVModulesRadio + '</strong>';
        }

        function updateBatteryCapacity() {
            var selectedBatteryCapacityRadio = getSelectedRadioValue(batteryCapacityRadios);
            batteryCapacitySpan.innerHTML = 'Ємність батареї:&nbsp; <strong>' + selectedBatteryCapacityRadio + '</strong>';
        }

        function getSelectedRadioValue(radiosGroup1, radiosGroup2) {
            var radioButtons = radiosGroup1.length ? radiosGroup1 : radiosGroup2;
            for (var i = 0; i < radioButtons.length; i++) {
                if (radioButtons[i].checked) {
                    return radioButtons[i].value;
                }
            }
            return '';
        }
    });













<!-- Скрипт формул -->
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('Calculator').addEventListener('click', function () {
            var radioButton = findCheckedRadioButton([
                'Radio_1', 'Radio_2', 'Radio_3', 'Radio_4', 'Radio_5', 'Radio_6', 'Radio_8', 'Radio_10', 'Radio_15'
            ]);

            if (radioButton) {
                var data = parseFloat(radioButton.value);
                updateFormulas(data, ['#formula', '#formula_2', '#formula_3'], ['#val_formula', '#val_formula_2', '#val_formula_3']);
            }
        });

        function findCheckedRadioButton(ids) {
            for (var i = 0; i < ids.length; i++) {
                var radioButton = document.getElementById(ids[i]);
                if (radioButton.checked) {
                    return radioButton;
                }
            }
            return null;
        }

        function updateFormulas(data, formulaSelectors, valFormulaSelectors) {
            formulaSelectors.forEach(function (selector, index) {
                var formulaElement = document.querySelector(selector);
                var valFormulaElement = document.querySelector(valFormulaSelectors[index]);

                var result = (index === 0) ? data / 2 : (index === 1) ? data : data * 1.2;

                // Update the formula element
                formulaElement.textContent = formatResult(result) + ' кВт';

                // Update the corresponding value element
                if (valFormulaElement) {
                    valFormulaElement.value = formatResult(result) + ' кВт';
                }
            });
        }

        function formatResult(result) {
            return result.toFixed(2).replace(/\.?0+$/, '');
        }
    });


    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('Calculator_1').addEventListener('click', function () {
            var radioButton = findCheckedRadioButton([
                'Radio_3_1', 'Radio_6_1', 'Radio_8_1', 'Radio_10_1', 'Radio_12', 'Radio_15_1', 'Radio_20', 'Radio_30', 'Radio_45'
            ]);

            if (radioButton) {
                var data = parseFloat(radioButton.value);
                updateFormulas(data, ['#formula', '#formula_2', '#formula_3'], ['#val_formula', '#val_formula_2', '#val_formula_3']);
            }
        });

        function findCheckedRadioButton(ids) {
            for (var i = 0; i < ids.length; i++) {
                var radioButton = document.getElementById(ids[i]);
                if (radioButton.checked) {
                    return radioButton;
                }
            }
            return null;
        }

        function updateFormulas(data, formulaSelectors, valFormulaSelectors) {
            formulaSelectors.forEach(function (selector, index) {
                var formulaElement = document.querySelector(selector);
                var valFormulaElement = document.querySelector(valFormulaSelectors[index]);

                var result = (index === 0) ? data / 2 : (index === 1) ? data : data * 1.2;

                // Update the formula element
                formulaElement.textContent = formatResult(result) + ' кВт';

                // Update the corresponding value element
                if (valFormulaElement) {
                    valFormulaElement.value = formatResult(result) + ' кВт';
                }
            });
        }

        function formatResult(result) {
            return result.toFixed(2).replace(/\.?0+$/, '');
        }
    });



<!-- Скрипт виведення результату -->
        document.addEventListener('DOMContentLoaded', function () {
            var powerPVModulesRadios = document.getElementsByName('Select-the-power-of-photovoltaic-modules');
            var powerPVModulesSpan = document.getElementById('power_PV_modules');
            var formulaBtn = document.getElementById('formula_btn');

            formulaBtn.addEventListener('click', function () {
                updatePowerPVModules();
            });

            function updatePowerPVModules() {
                for (var i = 0; i < powerPVModulesRadios.length; i++) {
                    if (powerPVModulesRadios[i].checked) {
                        powerPVModulesSpan.innerHTML = 'Потужність ФЕМ:&nbsp; <strong>' + powerPVModulesRadios[i].value + '</strong>';
                        break;
                    }
                }
            }
        });
