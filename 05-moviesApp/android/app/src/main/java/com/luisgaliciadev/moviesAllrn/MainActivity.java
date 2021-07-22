// package com.moviesapp;
package com.luisgaliciadev.moviesAllrn;

import android.os.Bundle; // build apk

import com.facebook.react.ReactActivity;

// react-native-splash-screen >= 0.3.1
import org.devio.rn.splashscreen.SplashScreen; // Build apk

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */

  // Build apk
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }
   
  @Override
  protected String getMainComponentName() {
    return "moviesApp";
  }
}
