import 'package:c_trade/constant.dart';
import 'package:c_trade/local_storage.dart';
import 'package:c_trade/model/base_response.dart';
import 'package:c_trade/model/responses/trade_stats_response.dart';
import 'package:dio/dio.dart';

class GetTradeStats {
  static Future<BaseResponse<TradeStatsResponse?>> getTradeStats() async {
    try {
      String userId = LocalStorage.getUserId() ?? '';
      if (userId.isEmpty) {
        return BaseResponse<TradeStatsResponse?>(
          success: false,
          message: 'User not found',
          data: null,
        );
      }
      Response res = await Dio()
          .get('${EnvironmentConstant.baseUrl}/trade/history/stats/$userId');
      var response = BaseResponse<TradeStatsResponse?>.fromJson(
        res.data,
        TradeStatsResponse.fromJson,
      );
      return response;
    } catch (e) {
      return BaseResponse<TradeStatsResponse?>(
        success: false,
        message: 'Get Trade Stats Error: ${e.toString()}',
        data: null,
      );
    }
  }
}
