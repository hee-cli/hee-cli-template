function main () {
  return `
    <% if (private) { %>
      <h1>private is true</h1>
    <% } else { %>
      <h1>private is false</h1>
    <% } %>
    <h2>author's name is <%= author %></h2>
    <h2>desc is <%= description %></h2>
    <h2>license is <%= license %></h2>
  `
}
