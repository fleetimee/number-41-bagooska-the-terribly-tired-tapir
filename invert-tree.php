<!-- Fibonacci in laravel -->


<?php

    function fibonacci($n) {
        if ($n == 0) {
            return 0;
        } elseif ($n == 1) {
            return 1;
        } else {
            return fibonacci($n - 1) + fibonacci($n - 2);
        }
    }

    echo fibonacci(5);

    ?>