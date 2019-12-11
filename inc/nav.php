<?php include 'inc/config.php'?>

<nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="<?php echo $ROOT_URL;?>gamesite.php"><img class="img-logo" src="img/logo.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon text-light"><img class="menu-img" src="img/menu_bar.png" alt=""></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="<?php echo $ROOT_URL;?>gamesite.php">Gamesite</a>
                    </li>
                   <!-- <li class="nav-item">
                        <a class="nav-link" href="<?php //echo $ROOT_URL;?>score.php">Score</a>
                    </li> -->
                    <li class="nav-item">
                        <a class="nav-link" href="<?php echo $ROOT_URL;?>profile.php">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="<?php echo $ROOT_URL;?>logud.php">Log out</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>