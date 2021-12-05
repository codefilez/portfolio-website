const Books = () => {
  const bookStrings = [
    `Domain Driven Design by Eric Evans`,
    `The Software Architect Elevator by Gregor Hohpe`,
    `Building Microservices by Sam Newman`,
    `Patterns of Enterprise Application Architecture by Martin Fowler`,
    `Clean Craftsmanship by Robert Martin`,
  ];
  return (
    <main style={{ padding: `1rem 0` }}>
      <h2>Recently Read Bookshelf</h2>
      {bookStrings.map((bookName) => (
        <p key={bookName}>{bookName}</p>
      ))}
    </main>
  );
};

export default Books;
