const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When("I visit {word}", (url) => {
	cy.visit(url);
});

Then("I should see a search bar", () => {
	cy.get("input").should(
		"have.attr",
		"placeholder",
		"Search the web without being tracked"
	);

	assert.deepEqual({}, {});
});