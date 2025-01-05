CREATE TABLE `users` (
	`user_id` integer PRIMARY KEY NOT NULL,
	`chat_id` integer NOT NULL,
	`username` text,
	`first_name` text,
	`last_name` text
);
