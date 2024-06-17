import 'package:c_trade/widget/topbar.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class InformationPage extends StatefulWidget {
  final bool isRegister;
  const InformationPage({super.key, required this.isRegister});

  @override
  State<InformationPage> createState() => _InformationPageState();
}

class _InformationPageState extends State<InformationPage> {
  late bool isEditing;
  String nameTitle = 'Mr.';
  String username = 'johndoe';
  String firstName = 'John';
  String lastName = 'Doe';
  String email = 'john@doe.com';
  String expected = '200 kgCO2eq';

  List<String> nameTitles = ['Mr.', 'Mrs.', 'Ms.', 'Dr.'];
  List<String> expecteds = [
    '200 kgCO2eq',
    '500 kgCO2eq',
    '1000 kgCO2eq',
    '2000 kgCO2eq',
    '5000 kgCO2eq',
    '8000 kgCO2eq',
    '10,000 kgCO2eq',
    '15,000 kgCO2eq',
    '20,000 kgCO2eq',
    '50,000 kgCO2eq'
  ];

  late TextEditingController nameTitleController;
  late TextEditingController usernameController;
  late TextEditingController firstNameController;
  late TextEditingController lastNameController;
  late TextEditingController emailController;
  late TextEditingController expectedController;

  @override
  void initState() {
    nameTitleController = TextEditingController(text: nameTitle);
    usernameController = TextEditingController(text: username);
    firstNameController = TextEditingController(text: firstName);
    lastNameController = TextEditingController(text: lastName);
    emailController = TextEditingController(text: email);
    expectedController = TextEditingController(text: expected);
    if (widget.isRegister) {
      isEditing = true;
    } else {
      isEditing = false;
    }
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage('assets/images/background/whole.png'),
            fit: BoxFit.cover,
          ),
        ),
        child: FractionallySizedBox(
          widthFactor: 1,
          heightFactor: 1,
          child: SingleChildScrollView(
            child: Padding(
              padding: EdgeInsets.only(
                  top: 30,
                  left: MediaQuery.of(context).size.width * 0.07,
                  right: MediaQuery.of(context).size.width * 0.07),
              child: Column(
                children: [
                  const TopBar(
                    title: "Information",
                  ),
                  SizedBox(height: MediaQuery.of(context).size.height * 0.05),
                  Stack(
                    children: [
                      SizedBox(
                        height: MediaQuery.of(context).size.height * 0.15,
                        width: MediaQuery.of(context).size.height * 0.15,
                        child: const FittedBox(
                          child: Icon(
                            Icons.account_circle_outlined,
                            color: Colors.white,
                          ),
                        ),
                      ),
                      isEditing
                          ? Positioned(
                              bottom: 0,
                              right: 0,
                              child: SizedBox(
                                height:
                                    MediaQuery.of(context).size.height * 0.1,
                                width: MediaQuery.of(context).size.height * 0.1,
                                child: const FittedBox(
                                  child: Icon(
                                    Icons.add_circle,
                                    color: Colors.black,
                                  ),
                                ),
                              ),
                            )
                          : const SizedBox(),
                    ],
                  ),
                  SizedBox(height: MediaQuery.of(context).size.height * 0.03),
                  FractionallySizedBox(
                    widthFactor: 1,
                    child: Text(
                      'Personal Information',
                      style: GoogleFonts.lexendPeta(
                          color: const Color(0xFFD2D79F),
                          fontSize: 16,
                          fontWeight: FontWeight.w400),
                    ),
                  ),
                  const Divider(
                    color: Color(0xFFD2D79F),
                    thickness: 1,
                  ),
                  SizedBox(height: MediaQuery.of(context).size.height * 0.02),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      SizedBox(
                        width: MediaQuery.of(context).size.width * 0.25,
                        child: IgnorePointer(
                          ignoring: !isEditing,
                          child: DropdownButtonFormField<String>(
                            decoration: InputDecoration(
                              labelStyle: GoogleFonts.roboto(
                                color: const Color(0xFFD2D79F),
                              ),
                              enabled: isEditing,
                              filled: true,
                              fillColor: Colors.transparent,
                              disabledBorder: const OutlineInputBorder(
                                borderSide: BorderSide(
                                    color: Color(0xFFD2D79F), width: 1),
                              ),
                              enabledBorder: const OutlineInputBorder(
                                borderSide: BorderSide(
                                    color: Color(0xFFD2D79F), width: 1),
                              ),
                              border: const OutlineInputBorder(
                                borderSide: BorderSide(
                                    color: Color(0xFFD2D79F), width: 1),
                              ),
                              focusedBorder: const OutlineInputBorder(
                                borderSide: BorderSide(
                                    color: Color(0xFFD2D79F), width: 1),
                              ),
                              labelText: 'Name Title',
                              hintText: 'Name',
                              hintStyle: GoogleFonts.lexendDeca(),
                            ),
                            style: GoogleFonts.roboto(
                              color: const Color(0x9FD2D79F),
                            ),
                            value: nameTitle,
                            items: nameTitles.map((String v) {
                              return DropdownMenuItem<String>(
                                value: v,
                                child: Text(v),
                              );
                            }).toList(),
                            onChanged: (String? e) {},
                          ),
                        ),
                      ),
                      SizedBox(
                        width: MediaQuery.of(context).size.width * 0.5,
                        child: TextField(
                          controller: usernameController,
                          style: GoogleFonts.roboto(
                            color: const Color(0x9FD2D79F),
                          ),
                          decoration: InputDecoration(
                            labelStyle: GoogleFonts.roboto(
                              color: const Color(0xFFD2D79F),
                            ),
                            enabled: isEditing,
                            filled: true,
                            fillColor: Colors.transparent,
                            disabledBorder: const OutlineInputBorder(
                              borderSide: BorderSide(
                                  color: Color(0xFFD2D79F), width: 1),
                            ),
                            enabledBorder: const OutlineInputBorder(
                              borderSide: BorderSide(
                                  color: Color(0xFFD2D79F), width: 1),
                            ),
                            border: const OutlineInputBorder(
                              borderSide: BorderSide(
                                  color: Color(0xFFD2D79F), width: 1),
                            ),
                            focusedBorder: const OutlineInputBorder(
                              borderSide: BorderSide(
                                  color: Color(0xFFD2D79F), width: 1),
                            ),
                            labelText: 'Username',
                            hintText: 'username',
                            hintStyle: GoogleFonts.lexendDeca(),
                          ),
                        ),
                      ),
                    ],
                  ),
                  SizedBox(height: MediaQuery.of(context).size.height * 0.02),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      SizedBox(
                        width: MediaQuery.of(context).size.width * 0.38,
                        child: TextField(
                          controller: firstNameController,
                          style: GoogleFonts.roboto(
                            color: const Color(0x9FD2D79F),
                          ),
                          decoration: InputDecoration(
                            labelStyle: GoogleFonts.roboto(
                              color: const Color(0xFFD2D79F),
                            ),
                            enabled: isEditing,
                            filled: true,
                            fillColor: Colors.transparent,
                            disabledBorder: const OutlineInputBorder(
                              borderSide: BorderSide(
                                  color: Color(0xFFD2D79F), width: 1),
                            ),
                            enabledBorder: const OutlineInputBorder(
                              borderSide: BorderSide(
                                  color: Color(0xFFD2D79F), width: 1),
                            ),
                            border: const OutlineInputBorder(
                              borderSide: BorderSide(
                                  color: Color(0xFFD2D79F), width: 1),
                            ),
                            focusedBorder: const OutlineInputBorder(
                              borderSide: BorderSide(
                                  color: Color(0xFFD2D79F), width: 1),
                            ),
                            labelText: 'First Name',
                            hintText: 'First Name',
                            hintStyle: GoogleFonts.lexendDeca(),
                          ),
                        ),
                      ),
                      SizedBox(
                        width: MediaQuery.of(context).size.width * 0.39,
                        child: TextField(
                          controller: lastNameController,
                          style: GoogleFonts.roboto(
                            color: const Color(0x9FD2D79F),
                          ),
                          decoration: InputDecoration(
                            labelStyle: GoogleFonts.roboto(
                              color: const Color(0xFFD2D79F),
                            ),
                            enabled: isEditing,
                            filled: true,
                            fillColor: Colors.transparent,
                            disabledBorder: const OutlineInputBorder(
                              borderSide: BorderSide(
                                  color: Color(0xFFD2D79F), width: 1),
                            ),
                            enabledBorder: const OutlineInputBorder(
                              borderSide: BorderSide(
                                  color: Color(0xFFD2D79F), width: 1),
                            ),
                            border: const OutlineInputBorder(
                              borderSide: BorderSide(
                                  color: Color(0xFFD2D79F), width: 1),
                            ),
                            focusedBorder: const OutlineInputBorder(
                              borderSide: BorderSide(
                                  color: Color(0xFFD2D79F), width: 1),
                            ),
                            labelText: 'Last Name',
                          ),
                        ),
                      ),
                    ],
                  ),
                  SizedBox(height: MediaQuery.of(context).size.height * 0.02),
                  TextField(
                    controller: emailController,
                    style: GoogleFonts.roboto(
                      color: const Color(0x9FD2D79F),
                    ),
                    decoration: InputDecoration(
                      labelStyle: GoogleFonts.roboto(
                        color: const Color(0xFFD2D79F),
                      ),
                      enabled: isEditing,
                      filled: true,
                      fillColor: Colors.transparent,
                      disabledBorder: const OutlineInputBorder(
                        borderSide:
                            BorderSide(color: Color(0xFFD2D79F), width: 1),
                      ),
                      enabledBorder: const OutlineInputBorder(
                        borderSide:
                            BorderSide(color: Color(0xFFD2D79F), width: 1),
                      ),
                      border: const OutlineInputBorder(
                        borderSide:
                            BorderSide(color: Color(0xFFD2D79F), width: 1),
                      ),
                      focusedBorder: const OutlineInputBorder(
                        borderSide:
                            BorderSide(color: Color(0xFFD2D79F), width: 1),
                      ),
                      labelText: 'Email',
                      hintText: 'Email',
                      hintStyle: GoogleFonts.lexendDeca(),
                    ),
                  ),
                  SizedBox(height: MediaQuery.of(context).size.height * 0.02),
                  FractionallySizedBox(
                    widthFactor: 1,
                    child: Text(
                      'Company Information',
                      style: GoogleFonts.lexendPeta(
                          color: const Color(0xFFD2D79F),
                          fontSize: 16,
                          fontWeight: FontWeight.w400),
                    ),
                  ),
                  const Divider(
                    color: Color(0xFFD2D79F),
                    thickness: 1,
                  ),
                  SizedBox(height: MediaQuery.of(context).size.height * 0.02),
                  TextField(
                    controller: usernameController,
                    style: GoogleFonts.roboto(
                      color: const Color(0x9FD2D79F),
                    ),
                    decoration: InputDecoration(
                      labelStyle: GoogleFonts.roboto(
                        color: const Color(0xFFD2D79F),
                      ),
                      enabled: isEditing,
                      filled: true,
                      fillColor: Colors.transparent,
                      disabledBorder: const OutlineInputBorder(
                        borderSide:
                            BorderSide(color: Color(0xFFD2D79F), width: 1),
                      ),
                      enabledBorder: const OutlineInputBorder(
                        borderSide:
                            BorderSide(color: Color(0xFFD2D79F), width: 1),
                      ),
                      border: const OutlineInputBorder(
                        borderSide:
                            BorderSide(color: Color(0xFFD2D79F), width: 1),
                      ),
                      focusedBorder: const OutlineInputBorder(
                        borderSide:
                            BorderSide(color: Color(0xFFD2D79F), width: 1),
                      ),
                      labelText: 'Username',
                      hintText: 'username',
                      hintStyle: GoogleFonts.lexendDeca(),
                    ),
                  ),
                  SizedBox(height: MediaQuery.of(context).size.height * 0.02),
                  IgnorePointer(
                    ignoring: !isEditing,
                    child: DropdownButtonFormField<String>(
                      decoration: InputDecoration(
                        labelStyle: GoogleFonts.roboto(
                          color: const Color(0xFFD2D79F),
                        ),
                        enabled: isEditing,
                        filled: true,
                        fillColor: Colors.transparent,
                        disabledBorder: const OutlineInputBorder(
                          borderSide:
                              BorderSide(color: Color(0xFFD2D79F), width: 1),
                        ),
                        enabledBorder: const OutlineInputBorder(
                          borderSide:
                              BorderSide(color: Color(0xFFD2D79F), width: 1),
                        ),
                        border: const OutlineInputBorder(
                          borderSide:
                              BorderSide(color: Color(0xFFD2D79F), width: 1),
                        ),
                        focusedBorder: const OutlineInputBorder(
                          borderSide:
                              BorderSide(color: Color(0xFFD2D79F), width: 1),
                        ),
                        labelText: 'Expected monthly offest to trade',
                        hintStyle: GoogleFonts.lexendDeca(),
                      ),
                      style: GoogleFonts.roboto(
                        color: const Color(0x9FD2D79F),
                      ),
                      value: expected,
                      items: expecteds.map((String v) {
                        return DropdownMenuItem<String>(
                          value: v,
                          child: Text(v),
                        );
                      }).toList(),
                      onChanged: (String? e) {},
                    ),
                  ),
                  SizedBox(height: MediaQuery.of(context).size.height * 0.02),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      InkWell(
                        onTap: () {},
                        child: Container(
                          width: MediaQuery.of(context).size.width * 0.3,
                          height: MediaQuery.of(context).size.width * 0.1,
                          decoration: BoxDecoration(
                            color: Colors.transparent,
                            border: Border.all(color: const Color(0xFFD2D79F)),
                            borderRadius: BorderRadius.circular(5),
                          ),
                          child: Center(
                            child: Text(
                              'Log out',
                              textAlign: TextAlign.center,
                              style: GoogleFonts.lexendExa(
                                color: const Color(0xFFD2D79F),
                                fontWeight: FontWeight.bold,
                                fontSize: 16,
                              ),
                            ),
                          ),
                        ),
                      ),
                      InkWell(
                        onTap: () {},
                        child: Container(
                          width: MediaQuery.of(context).size.width * 0.3,
                          height: MediaQuery.of(context).size.width * 0.1,
                          decoration: BoxDecoration(
                            color: const Color(0xFFD2D79F),
                            borderRadius: BorderRadius.circular(5),
                          ),
                          child: Center(
                            child: Text(
                              'Edit',
                              textAlign: TextAlign.center,
                              style: GoogleFonts.lexendExa(
                                color: const Color(0xFF483838),
                                fontWeight: FontWeight.bold,
                                fontSize: 16,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ],
                  )
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
