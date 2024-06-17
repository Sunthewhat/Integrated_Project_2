class LoginResponse {
  int userId;
  String username;
  String nameTitle;
  String firstname;
  String lastname;
  String email;
  String expectedMonthly;

  LoginResponse({
    required this.userId,
    required this.username,
    required this.nameTitle,
    required this.firstname,
    required this.lastname,
    required this.email,
    required this.expectedMonthly,
  });

  factory LoginResponse.fromJson(Map<String, dynamic>? json) {
    if (json == null) {
      return LoginResponse(
        userId: 0,
        username: '',
        nameTitle: '',
        firstname: '',
        lastname: '',
        email: '',
        expectedMonthly: '',
      );
    }
    return LoginResponse(
      userId: json['userId'],
      username: json['username'],
      nameTitle: json['nameTitle'],
      firstname: json['firstname'],
      lastname: json['lastname'],
      email: json['email'],
      expectedMonthly: json['expectedMonthly'],
    );
  }
}
