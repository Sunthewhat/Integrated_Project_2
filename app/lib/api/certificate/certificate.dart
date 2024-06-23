import 'package:c_trade/constant.dart';
import 'package:c_trade/local_storage.dart';
import 'package:c_trade/model/base_response.dart';
import 'package:c_trade/model/responses/certificate_response.dart';
import 'package:dio/dio.dart';

class CertificateAPI {
  static Future<BaseResponse<CertificatesResponse?>> certificate() async {
    try {
      // int userId = LocalStorage.getUserId();
      int userId = 9;
      Response res = await Dio()
          .get('${EnvironmentConstant.baseUrl}/trade/history/$userId');
      var response = BaseResponse<CertificatesResponse?>.fromArrayJson(
          res.data, (payload) => CertificatesResponse.fromJson(payload));
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
