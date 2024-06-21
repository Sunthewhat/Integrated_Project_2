class CertificateResponse {
  String certificateId;
  int amount;
  String unit;
  DateTime date;
  CertificateResponse({
    required this.certificateId,
    required this.amount,
    required this.unit,
    required this.date,
  });
  factory CertificateResponse.fromJson(Map<String, dynamic>? json) {
    if (json == null) {
      return CertificateResponse(
        certificateId: '',
        amount: 0,
        unit: '',
        date: DateTime.now(),
      );
    }
    return CertificateResponse(
      certificateId: json['certificateId'],
      amount: json['amount'],
      unit: json['unit'],
      date: DateTime.parse(json['date']),
    );
  }
}
