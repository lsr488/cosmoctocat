describe("The landing page", function() {
	beforeAll(function() {
		// generic greeting
		var body = document.getElementsByTagName("body")[0];
		var header = document.createElement("h1");
		var content = document.	createTextNode("Hello, Cosmoctocat!");
		header.appendChild(content);
		body.appendChild(header);

		// specific Cosmoctocat greeting

		// input
		var form = document.createElement("form");
		var input = document.createElement("input");
		input.className = "test-class";
		input.name = "test-name";
		input.placeholder = "test-placeholder";
		form.appendChild(input);
		body.appendChild(form);

		// inject into page

	});

	it("has an h1 that says hello to a generic Cosmoctocat", function() {
		expect(document.getElementsByTagName("h1")[0].innerText).toBe("Hello, Cosmoctocat!");
	});

	xit("has an h2 that acknowledges Cosmoctocat by name", function() {

	});

	xit("has an input that accepts the Cosmoctocat's name", function() {

	});

	it("the input has a class value", function() {
		expect(document.getElementsByClassName("test-class")[0].classList.value).toEqual("test-class");
	});

	it("the input has a name value", function() {
		expect(document.getElementsByClassName("test-class")[0].name).toEqual("test-name");
	});

	it("the input has a placeholder value", function() {
		expect(document.getElementsByClassName("test-class")[0].placeholder).toEqual("test-placeholder");
	})

});