import 'package:c_trade/constant.dart';
import 'package:c_trade/local_storage.dart';
import 'package:c_trade/model/base_response.dart';
import 'package:c_trade/model/responses/trade_info_response.dart';
import 'package:dio/dio.dart';

class GetTradeInfo {
  static Future<BaseResponse<TradeInfoResponse?>> getTradeInfo() async {
    try {
      String userId = LocalStorage.getUserId() ?? '';
      if (userId.isEmpty) {
        return BaseResponse<TradeInfoResponse?>(
          success: false,
          message: 'User not found',
          data: null,
        );
      }
      Response res = await Dio()
          .get('${EnvironmentConstant.baseUrl}/user/tradeInfo/$userId');
      var reponse = BaseResponse<TradeInfoResponse?>.fromJson(
        res.data,
        TradeInfoResponse.fromJson,
      );
      return reponse;
    } catch (e) {
      return BaseResponse<TradeInfoResponse?>(
        success: false,
        message: 'Get Trade Info Error: ${e.toString()}',
        data: null,
      );
    }
  }
}
