class RegisterResponse {
  String? userId;

  RegisterResponse({
    required this.userId,
  });

  factory RegisterResponse.fromJson(Map<String, dynamic>? json) {
    if (json == null) {
      return RegisterResponse(
        userId: '',
      );
    }
    return RegisterResponse(
      userId: json['userId'],
    );
  }
}
