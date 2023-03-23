describe("Get Users", () => {
  it("Add a new user", () => {
    var user = {
      name: "Hasbi Asyiddiki",
      job: "Test Engineer",
    };
    cy.request("POST", "https:reqres.in/api/users", user).then((response) => {
      expect(response.status).equal(201);
      expect(response.body.name).to.eq(user.name);
    });
  });
});
