class SelectablePage {
    //Open URL
    visit() {
        cy.visit('https://demoqa.com/selectable');
    }
    //Open Grid
    clickGridTab() {
        cy.get('#demo-tab-grid').click();
    }

    selectNumbers(numbersToSelect) {
        numbersToSelect.forEach(num => {
            cy.contains('.list-group-item.list-group-item-action', num).click();
        });
    }

    validateNumbersSelected(numbersToSelect) {
        numbersToSelect.forEach(num => {
            cy.contains('.list-group-item.list-group-item-action.active', num);
        });
    }

    validateNumbersNotSelected(numbersNotToSelect) {
        numbersNotToSelect.forEach(num => {
            cy.contains('.list-group-item.list-group-item-action', num).should('not.have.class', 'active');
        });
    }
}
export default SelectablePage;