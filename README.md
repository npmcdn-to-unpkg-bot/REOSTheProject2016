Megoldandó problémák:
	- Angular 2-vel kompatibilis scrolling
	- Crausel-hez több effect hozzáadása
		- működése jó!
		- effect nem megy
		- vertical: http://www.bootply.com/63148
	- Navbar akkor látszik, ha NEM az startScreen-en állunk
	- Navbar-ban a menük active helyzetének beállítása
	- elem effectek: animate.css
	- elem hover effectek: hover.css

### 0. Alkalmazás meghatározása

	! Mit szeretnék megvalósítani?
		# Egy olyan SPA alkalamzást, ami ....

	! Miért szeretnénk megvalósítani?
		# Úgy gondoljuk, az informatika ma és a jövőben is ott lesz az emberek életeben nap, mint nap.
		# Egy kis tanulással mindenki elsajátíthatja a programozási kézségét és a munkaerő piacon .....

	! Hogyan szeretnénk megvalósítani / Miben szeretnénk megvalósítani?
		# Az alkalmazásunkhoz választott techonlógiák megfelelnek az alkalmazás kihívásaihoz.
		# A legtöbb fejlesztő és állást kínálók ezeket a techológiákat várják el.

	! Mik szükségesek a megvalósításhoz?
		# Az alklamzáshoz elkészített ütemterv alapján kijelenthető, hogy több részre oszlik szét a feladat.
		# Grafikai tervek elkészítéséhez egy UI/UIX Designer lesz szükgség. Ő készíti el az alkalmazás arculatát és Brand-jét.
		# Programozáshoz egy motorfejlesztőre (back-end) lesz szükség, akinek adatbázis kezeléshez szüksége lesz a MySQL-re és ismernie kell a NodeJS csomagkezelő rendszert.

### 0.1 Fejlesztéshez szükséges szoftverek

	1. Csomag kezelő rendszer: NodeJS - (https://nodejs.org/en/) és Composer - (https://getcomposer.org/)
	2. Verzió kezelő rendszer: Git - (https://git-scm.com/downloads)
	3. Compile (SASS) kezelő rendszer: Ruby - (http://rubyinstaller.org/)
	4. Web-szerver: XAMPP (Apache, MySQL) - (https://www.apachefriends.org/)
	5. Fejlesztő környezet: Sublime Text 3 - (https://www.sublimetext.com/) / Notepad++ - (https://notepad-plus-plus.org/)
	6. Fájl kezelő rendszer: Total Commander - (http://www.totalcommander.hu/)

### 0.2 Fejlesztéshez választott programozás nyelvek

	1. Front-end: JavaScript / jQuery (veziószám) / AngularJS 2 (veziószám)
	2. Back-end: PHP (veziószám) / Laravel 5 (veziószám)
	3. Database: MySQL (veziószám)

###  0.3 Verziózás meghatározása és inicializálása

	! Hogy történik a verziózás?
		# Effector

	0.1 Bash megnyitása: Navigálás a root könyvtárba, ahol az alkalmazások pihennek.
	0.2 Projekt mappa létrehozása: mkdir REOSTheProject2016
	1. 	Github felhasználó létrehozása - (https://github.com)
	2. 	Git tároló (repository) létrehozása: $cd REOSTheProject2016, $ git init
	3.	README.md fájl létrehozása és hozzáadása a tárolóhoz: $ git add .
	4.	Tárolt adatok "mentése": $ git commit -m 'Initialize REOS The Project'
	5.	(nemtommiezaművelet):  $ git remote add origin https://github.com/Revajzz/REOSTheProject2016.git
	6. 	(eztse): $ git push -u origin master

## 0

### Laravel 5 telepítése és "Hello World"
	
	1. https://laravel.com/docs/5.2

## 