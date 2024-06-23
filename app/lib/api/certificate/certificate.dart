import 'package:c_trade/constant.dart';
import 'package:c_trade/model/base_response.dart';
import 'package:c_trade/model/responses/certificate_response.dart';
import 'package:dio/dio.dart';

class Login {
  static Future<BaseResponse<CertificateResponse?>> certificate(
    int userId
  ) async {
    try {
      Response res =
          await Dio().post('${EnvironmentConstant.baseUrl}/certificate', data: {
        'userId': userId,
      });
      var response = BaseResponse<CertificateResponse?>.fromArrayJson(
          res.data, (payload)=>CertificateResponse.fromJson(payload as Map<String, dynamic>?)
          );
      return response;
    } catch (e) {
      return BaseResponse<CertificateResponse?>(
        success: false,
        message: e.toString(),
        data: null,
      );
    }
  }
}
