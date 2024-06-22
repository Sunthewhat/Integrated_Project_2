class GetUserResponse {
  int userId;
  String username;
  String nameTitle;
  String lastname;
  String email;
  String expectedMonthly;
  String firstname;
  String profileImage;

  GetUserResponse({
    required this.userId,
    required this.username,
    required this.nameTitle,
    required this.lastname,
    required this.email,
    required this.expectedMonthly,
    required this.firstname,
    required this.profileImage,
  });

  factory GetUserResponse.fromJson(Map<String, dynamic>? json) {
    if (json == null) {
      return GetUserResponse(
        userId: 0,
        username: '',
        nameTitle: '',
        lastname: '',
        email: '',
        expectedMonthly: '',
        firstname: '',
        profileImage: '',
      );
    }
    return GetUserResponse(
      userId: json['userId'],
      username: json['username'],
      nameTitle: json['nameTitle'],
      lastname: json['lastname'],
      email: json['email'],
      expectedMonthly: json['expectedMonthly'],
      firstname: json['firstname'],
      profileImage: json['profileImage'],
    );
  }
}
