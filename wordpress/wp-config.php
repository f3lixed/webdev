<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'plasticoscalima');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'fwD~HutIsQLcQJM|;A,bj[}KpOUpW-)9nX^7~J;g~AA;|0C!Ceto(0$xmq>T$7D}');
define('SECURE_AUTH_KEY',  '&<;^2F<}/D(~]<%pv[j{[WDPXah3PXWHLV{JDbsX&4WWcyJT~gpQ]7q@@cmDcbvv');
define('LOGGED_IN_KEY',    'pE-q&Ax.7@(Fh6Ok_Ya+qLZZrb4r0X{ P)]YAO#JQ%v6Kr;U(e5)e?KVdQ8mT./g');
define('NONCE_KEY',        '$z{Vi/l1;R%Qv>DcjtF#};#he.q%C5W*d:kl$<qLKERfi*e{I7h1.EXfhay*hN-&');
define('AUTH_SALT',        'WA,V-Uw jVu~(Htnu?+B{XMW8^@zS#iVpePR71])}*L501g7[2;ty5HfkgTt|bLQ');
define('SECURE_AUTH_SALT', 'Gbq8fms~c[K[[AJiFh>&s9tLkAG@~Auzv3CIp)W2[YI~b8ar_t~RYcyMoa(1soXo');
define('LOGGED_IN_SALT',   'c3LB/^HV9$V6Hf36#Ke7g#REyaf3rBbu?V9vT_H_Rnn|R(]Z[az^9@nYoP(vq6su');
define('NONCE_SALT',       '(n{`r=@C=)ZbzOSuSV~55W#s^!_B1WZm@=Vp>#:W{-zNucZs96 K7O24_zU/2e+Z');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
