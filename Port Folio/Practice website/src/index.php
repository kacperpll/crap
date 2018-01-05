
<!DOCTYPE html>
<html>

<!-- Start Head -->
<head>
    <title> Practice Project </title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="distribution" content="global">
    <meta name="author" content="Kacper Duniewicz <kacper.duniewicz@gmail.com>">
    <meta name="Description" content="DESCRIPTION">
    <meta name="keywords" content="KEYWORDS">

    <!-- Start Stylesheets -->
    <link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="http://practice.local/bower_components/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="http://practice.local/src/styles/css/styles.css">
    <link href="https://fonts.googleapis.com/css?family=Bree+Serif" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <!-- End Stylsheets -->
</head>
<!-- End Head -->

<!-- Start Body -->
<body>

<!-- Start Header -->

  <header class="header">

      <div class="header__contener">
        <div class="header__button header__button-leftfirst">
          <div class="header__text">
            Home
          </div>
        </div>
        <div class="header__button header__button-leftsecond">
          <div class="header__text">
            Products
          </div>
        </div>
        <div class="header__logo">
        </div>
        <div class="header__button header__button-rightfirst">
          <div class="header__text">
            About us
          </div>
        </div>
        <div class="header__button header__button-rightsecond">
          <div class="header__text">
            Contact
          </div>
        </div>
      </div>

  </header>

<!-- End Header -->

<!-- Start Hero -->

  <section class="hero">

    <div class="hero-center">
      <div class="hero__text">
        <?php
          if (isset($_GET['first'])) {
            echo "<h1 class='h1__first'>This sample page</h1>";
          } elseif (isset($_GET['second'])) {
            echo "<h1 class='h1__second'>This isn`t a sample page</h1>";
          } else {
            echo "<h1>This is just a sample page</h1>";
          }
        ?>
      </div>
      <div class="hero__button">
        <div class="hero__button-text">
          push the button
        </div>
      </div>
    </div>

  </section>

<!-- End Hero -->

<!-- Start Content -->

  <section class="content">

    <div class="content__news">
      <h3>A heading title</h3>

        <img src="img/layer-1.png" alt="layer">
        <p>
          Lorem <span>ipsum</span> dolor sit amet, consectetur adipiscing elit. Donec quis felis fermentum, dictum odio ut.
        </p>

      <p class="hyphens content__text-big">
        Lorem <span>ipsum</span> dolor sit amet, consectetur adip&shy;iscing elit. Fusce eget ex nulla.
        Integer ullam&shy;corper nibh lorem, ut porttitor mi sagittis eget.
        Aenean malesuada mattis justo, sed efficitur nisl fringilla eget.
        Integer a mi quis lectus vul&shy;putate tempus quis quis dui.
        Mauris suscipit euismod urna, eget feugiat tellus imperdiet vitae. Vestibulum.
      </p>
      <p class="hyphens content__text-long">
        Lorem <span>ipsum</span> dolor sit amet, consectetur adip&shy;iscing elit. Fusce eget ex nulla.
        Integer ullam&shy;corper nibh lorem, ut porttitor mi sagittis eget.
        Aenean malesuada mattis justo, sed efficitur nisl fringilla eget.
        Integer a mi quis lectus vul&shy;putate tempus quis quis dui.
        Mauris suscipit euismod urna, eget feugiat tellus imperdiet vitae. Vestibulum.
      </p>
      <div class="content__news-more">
        — read more
      </div>
    </div>
    <div class="content__news">
      <h3>A much longer heading title</h3>
      <img src="img/layer-1.png" alt="layer">
      <p>
        Lorem <span>ipsum</span> dolor sit amet, consectetur adipiscing elit. Donec quis felis fermentum, dictum odio ut.
      </p>
      <p class="hyphens content__text-big">
        Lorem <span>ipsum</span> dolor sit amet, consectetur adip&shy;iscing elit. Fusce eget ex nulla.
        Integer ullam&shy;corper nibh lorem, ut porttitor mi sagittis eget.
        Aenean malesuada mattis justo, sed efficitur nisl fringilla eget.
      </p>
      <p class="hyphens content__text-long">
        Lorem <span>ipsum</span> dolor sit amet, consectetur adip&shy;iscing elit. Fusce eget ex nulla.
        Integer ullam&shy;corper nibh lorem, ut porttitor mi sagittis eget.
        Aenean malesuada mattis justo, sed efficitur nisl fringilla eget.
        Integer a mi quis lectus vul&shy;putate tempus quis quis dui.
        Mauris suscipit euismod urna, eget feugiat tellus imperdiet vitae. Vestibulum.
      </p>
      <div class="content__news-more">
        — read more
      </div>
    </div>

    <div class="content__news">
      <h3>A heading title</h3>
      <img src="img/layer-1.png" alt="layer">
      <p>
        Lorem <span>ipsum</span> dolor sit amet, consectetur adipiscing elit. Donec quis felis fermentum, dictum odio ut.
      </p>
      <p class="hyphens content__text-big">
        Lorem <span>ipsum</span> dolor sit amet, consectetur adip&shy;iscing elit. Fusce eget ex nulla.
        Integer ullam&shy;corper nibh lorem, ut porttitor mi sagittis eget.
        Aenean malesuada mattis justo, sed efficitur nisl fringilla eget.
        Integer a mi quis lectus vul&shy;putate tempus quis quis dui.
        Mauris suscipit euismod urna, eget feugiat tellus imperdiet vitae. Vestibulum.
      </p>
      <p class="hyphens content__text-long">
        Lorem <span>ipsum</span> dolor sit amet, consectetur adip&shy;iscing elit. Fusce eget ex nulla.
        Integer ullam&shy;corper nibh lorem, ut porttitor mi sagittis eget.
        Aenean malesuada mattis justo, sed efficitur nisl fringilla eget.
        Integer a mi quis lectus vul&shy;putate tempus quis quis dui.
        Mauris suscipit euismod urna, eget feugiat tellus imperdiet vitae. Vestibulum.
      </p>
      <div class="content__news-more">
        — read more
      </div>
    </div>


  </section>

<!-- End Content -->

<!-- Start Contact -->

  <section class="contact">

    <form id="form" class="contact__container">
      <h2>Contact us</h2>
      <div class="contact__form">
        <div class="contact__form-left">
          <input id="name" class="contact__form-small" type="text" name="name" placeholder="name" required>
          <input id="email" class="contact__form-small" type="email" name="email" placeholder="email">
          <input id="phone" class="contact__form-small" type="tel" name="phone" placeholder="phone">
        </div>
        <div class="contact__form-right">
          <textarea id="message" class="contact__form-big" type="text" name="message" placeholder="your message"></textarea>
        </div>
      </div>
      <button id="mybtn" type="submit" class="contact__button">
        <span class="contact__button-text">
          send message
        </span>
      </button>
      <div class="contact__back" id="fromTop">
        <span>back to top</span>
      </div>
    </form>

  </section>

<!-- End Contact -->

<!-- Start Footer -->

  <footer class="footer">

      <div class="footer__content">
        <div class="footer__navigation">
          <div class="footer__nav">
            — home
          </div>
          <div class="footer__nav">
            — about us
          </div>
          <div class="footer__nav">
            — products
          </div>
          <div class="footer__nav">
            — contact
          </div>
        </div>
        <div class="footer__links">
          <div class="footer__icons">
            <a class="footer__icons-first" href="https://twitter.com/" target="_blank">
            </a>
            <a class="footer__icons-second" href="https://facebook.com/" target="_blank">
            </a>
          </div>
        </div>
        <div class="footer__copyright">
          <div class="footer__copyright-text">
            <p>Copyright © 2010 Sample & Pack, Inc.</p>
          </div>
        </div>
      </div>

  </footer>

<!-- End Footer -->

<!-- Start Scripts -->
    <script src="http://practice.local/bower_components/jquery/dist/jquery.min.js"></script>
    <script src="http://practice.local/src/scripts/script.js" type="text/javascript"></script>
    <script src="http://practice.local/src/scripts/email.js" type="text/javascript"></script>
<!-- End Scripts -->

</body>
<!-- End Body -->

</html>
