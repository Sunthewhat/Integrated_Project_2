import 'package:c_trade/constant.dart';
import 'package:c_trade/local_storage.dart';
import 'package:c_trade/model/base_response.dart';
import 'package:c_trade/model/responses/certificate_response.dart';
import 'package:dio/dio.dart';

class CertificateAPI {
  static Future<BaseResponse<CertificatesResponse?>> certificate() async {
    try {
      String userId = LocalStorage.getUserId() ?? '';
      if (userId.isEmpty) {
        return BaseResponse<CertificatesResponse?>(
          success: false,
          message: 'User not found',
          data: CertificatesResponse(certificates: []),
        );
      }
      Response res = await Dio()
          .get('${EnvironmentConstant.baseUrl}/trade/history/$userId');
      var response = BaseResponse<CertificatesResponse?>.fromArrayJson(
          res.data, (payload) => CertificatesResponse.fromJson(payload));
      print(response.data!.certificates);
      return response;
    } catch (e) {
      return BaseResponse<CertificatesResponse?>(
        success: false,
        message: e.toString(),
        data: CertificatesResponse(certificates: []),
      );
    }
  }
}
