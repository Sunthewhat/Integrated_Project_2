import 'package:shared_preferences/shared_preferences.dart';

class LocalStorage {
  static SharedPreferences? _preferences;

  static const _keyUserName = 'username';
  static const _keyIsLoggedIn = 'isLoggedIn';
  static const _keyPassword = 'password';
  static const _keyUserId = 'userId';

  // Initialize the SharedPreferences instance
  static Future init() async {
    _preferences = await SharedPreferences.getInstance();
  }

  static Future clear() async {
    await _preferences?.clear();
  }

  // Set username
  static Future setUserName(String username) async {
    await _preferences?.setString(_keyUserName, username);
  }

  // Get username
  static String? getUserName() {
    return _preferences?.getString(_keyUserName);
  }

  // Clear username
  static Future clearUserName() async {
    await _preferences?.remove(_keyUserName);
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

  // Clear password
  static Future clearPassword() async {
    await _preferences?.remove(_keyPassword);
  }

  // Set user ID
  static Future setUserId(String userId) async {
    await _preferences?.setString(_keyUserId, userId);
  }

  // Get user ID
  static String? getUserId() {
    return _preferences?.getString(_keyUserId);
  }

  // Clear user ID
  static Future clearUserId() async {
    await _preferences?.remove(_keyUserId);
  }
}
