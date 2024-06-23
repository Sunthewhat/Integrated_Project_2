class UploadImageResponse {
  String? key;

  UploadImageResponse({
    required this.key,
  });

  factory UploadImageResponse.fromJson(Map<String, dynamic>? json) {
    if (json == null) {
      return UploadImageResponse(
        key: '',
      );
    }
    return UploadImageResponse(
      key: json['key'],
    );
  }
}
