class BaseResponse<T> {
  bool success;
  String message;
  T? data;

  BaseResponse({
    required this.success,
    required this.message,
    this.data,
  });

  factory BaseResponse.fromJson(
      Map<String, dynamic> json, Function(Map<String, dynamic>)? create) {
    return BaseResponse(
      success: json['success'],
      message: json['message'],
      data:
          create != null && json['data'] != null ? create(json['data']) : null,
    );
  }

  factory BaseResponse.formArrayJson(
      Map<String, dynamic> json, Function(List<dynamic>)? create) {
    return BaseResponse(
      success: json['success'],
      message: json['message'],
      data: create != null ? create(json['data']) : null,
    );
  }
}
