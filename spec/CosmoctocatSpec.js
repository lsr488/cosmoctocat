describe("The landing page", function() {
	beforeEach(function() {
		var body = document.getElementsByTagName("body")[0];
		var header = document.createElement("h1");
		var content = document.	createTextNode("Hello, Cosmoctocat!");
		body.appendChild(header);
		header.appendChild(content);

	});

	it("has an h1 that says hello", function() {
		expect(document.getElementsByTagName("h1")[0].innerText).toBe("Hello, Cosmoctocat!");
	});
});