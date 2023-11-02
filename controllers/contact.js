function renderContact(req, res) {
  const number = "123456789";
  res.render("contact", { number: number });
}

module.exports = renderContact;
