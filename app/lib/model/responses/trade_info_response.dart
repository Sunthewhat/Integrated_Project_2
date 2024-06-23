class TradeInfoResponse {
  int totalCarbonOffset;
  int totalCertificates;
  String expectedMonthlyCarbonOffset;

  TradeInfoResponse({
    required this.totalCarbonOffset,
    required this.totalCertificates,
    required this.expectedMonthlyCarbonOffset,
  });

  double getExpected() {
    return double.parse(expectedMonthlyCarbonOffset
        .replaceAll(',', '')
        .replaceAll('kgCO2eq', ''));
  }

  factory TradeInfoResponse.fromJson(Map<String, dynamic>? json) {
    if (json == null) {
      return TradeInfoResponse(
        totalCarbonOffset: 0,
        totalCertificates: 0,
        expectedMonthlyCarbonOffset: '',
      );
    }
    return TradeInfoResponse(
      totalCarbonOffset: json['totalCarbonOffset'],
      totalCertificates: json['totalCertificates'],
      expectedMonthlyCarbonOffset: json['expectedMonthlyCarbonOffset'],
    );
  }
}
