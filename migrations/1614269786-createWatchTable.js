exports.up = async (sql) => {
  await sql`
	CREATE TABLE watches (
		id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
		product_name VARCHAR (100),
		about_collection TEXT,
		description TEXT,
		images_url VARCHAR (50),
		price INT
	);
	`;
};

exports.down = async (sql) => {
  await sql`DROP TABLE watches`;
};
