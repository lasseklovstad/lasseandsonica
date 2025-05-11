CREATE TABLE `rsvps` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`full_name` text NOT NULL,
	`full_name_guest` text NOT NULL,
	`email` text NOT NULL,
	`attending` text NOT NULL,
	`food_preferences` text NOT NULL,
	`comments` text NOT NULL
);
