import 'package:shared_preferences/shared_preferences.dart';

class LocalStorage {
  static SharedPreferences? _preferences;

  static const _keyUserName = 'username';
  static const _keyIsLoggedIn = 'isLoggedIn';
  static const _keyPassword = 'password';
  static const _keyProfilePath = 'profilePath';

  // Initialize the SharedPreferences instance
  static Future init() async {
    _preferences = await SharedPreferences.getInstance();
  }

  // Set username
  static Future setUserName(String username) async {
    await _preferences?.setString(_keyUserName, username);
  }

  // Get username
  static String? getUserName() {
    return _preferences?.getString(_keyUserName);
  }

  // Set login status
  static Future setLoggedIn(bool isLoggedIn) async {
    await _preferences?.setBool(_keyIsLoggedIn, isLoggedIn);
  }

  // Get login status
  static bool? getLoggedIn() {
    return _preferences?.getBool(_keyIsLoggedIn);
  }

  // Set password
  static Future setPassword(String password) async {
    await _preferences?.setString(_keyPassword, password);
  }

  // Get password
  static String? getPassword() {
    return _preferences?.getString(_keyPassword);
  }

  // Set profile path
  static Future setProfilePath(String profilePath) async {
    await _preferences?.setString(_keyProfilePath, profilePath);
  }

  // Get profile path
  static String? getProfilePath() {
    return _preferences?.getString(_keyProfilePath);
  }
}
