import 'dart:io';

import 'package:c_trade/api/auth/register.dart';
import 'package:c_trade/api/image/image_api.dart';
import 'package:c_trade/local_storage.dart';
import 'package:c_trade/pages/home_page.dart';
import 'package:c_trade/widget/topbar.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:image_picker/image_picker.dart';
import 'package:path_provider/path_provider.dart';

class InformationPage extends StatefulWidget {
  final bool isRegister;
  const InformationPage({super.key, required this.isRegister});

  @override
  State<InformationPage> createState() => _InformationPageState();
}

class _InformationPageState extends State<InformationPage> {
  late bool isEditing;
  String nameTitle = 'Mr.';
  String username = LocalStorage.getUserName() ?? '';
  String firstName = 'John';
  String lastName = 'Doe';
  String email = 'john@doe.com';
  String expected = '200 kgCO2eq';
  File? image;

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

  late TextEditingController usernameController;
  late TextEditingController firstNameController;
  late TextEditingController lastNameController;
  late TextEditingController emailController;

  @override
  void initState() {
    if (widget.isRegister) {
      isEditing = true;
      usernameController = TextEditingController(text: username);
      firstNameController = TextEditingController();
      lastNameController = TextEditingController();
      emailController = TextEditingController();
    } else {
      isEditing = false;
      usernameController = TextEditingController(text: username);
      firstNameController = TextEditingController(text: firstName);
      lastNameController = TextEditingController(text: lastName);
      emailController = TextEditingController(text: email);
    }
    super.initState();
  }

  void handleSelectImage() async {
    XFile? imgX = await ImageAPI.pickImage(ImageSource.gallery);
    if (imgX == null) return;
    File? img = File(imgX.path);
    final String path = (await getApplicationDocumentsDirectory()).path;
    final String filePath = '$path/profile.png';

    final File newImage = await img.copy(filePath);
    LocalStorage.setProfilePath(filePath);
    setState(() {
      image = newImage;
    });
  }

  void handleRegister() async {
    String username = usernameController.text;
    String firstName = firstNameController.text;
    String lastName = lastNameController.text;
    String email = emailController.text;
    String password = LocalStorage.getPassword() ?? '';

    if (nameTitle.isEmpty ||
        username.isEmpty ||
        firstName.isEmpty ||
        lastName.isEmpty ||
        email.isEmpty ||
        expected.isEmpty) {
      print(nameTitle);
      print(username);
      print(firstName);
      print(lastName);
      print(email);
      print(expected);

      handleShowError('Please fill in all fields');
      return;
    }

    var response = await Register.register(
        username, password, nameTitle, firstName, lastName, email, expected);
    if (response.success) {
      handleHomePage();
    } else {
      handleShowError(response.message);
    }
  }

  void handleHomePage() {
    Navigator.of(context).pushReplacement(
      MaterialPageRoute(
        builder: (context) => const HomePage(),
      ),
    );
  }

  void handleShowError(String message) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text('Error'),
          content: Text(message),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: const Text('OK'),
            ),
          ],
        );
      },
    );
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
                        child: FittedBox(
                            child: CircleAvatar(
                          foregroundImage:
                              image != null ? FileImage(image!) : null,
                        )),
                      ),
                      isEditing
                          ? Positioned(
                              bottom: 5,
                              right: 5,
                              child: InkWell(
                                onTap: handleSelectImage,
                                child: SizedBox(
                                  height:
                                      MediaQuery.of(context).size.height * 0.03,
                                  width:
                                      MediaQuery.of(context).size.height * 0.03,
                                  child: const FittedBox(
                                    child: Icon(
                                      Icons.add_circle_outlined,
                                      color: Colors.grey,
                                    ),
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
                            onChanged: (String? e) {
                              if (e == null) return;
                              setState(() {
                                nameTitle = e;
                              });
                            },
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
                            enabled: false,
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
                      enabled: false,
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
                      onChanged: (String? e) {
                        if (e == null) return;
                        setState(() {
                          expected = e;
                        });
                      },
                    ),
                  ),
                  SizedBox(height: MediaQuery.of(context).size.height * 0.02),
                  !isEditing
                      ? Row(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          children: [
                            InkWell(
                              onTap: () {},
                              child: Container(
                                width: MediaQuery.of(context).size.width * 0.3,
                                height: MediaQuery.of(context).size.width * 0.1,
                                decoration: BoxDecoration(
                                  color: Colors.transparent,
                                  border: Border.all(
                                      color: const Color(0xFFD2D79F)),
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
                      : InkWell(
                          onTap: handleRegister,
                          child: Container(
                            width: MediaQuery.of(context).size.width * 0.5,
                            height: MediaQuery.of(context).size.width * 0.1,
                            decoration: BoxDecoration(
                              color: const Color(0xFFD2D79F),
                              borderRadius: BorderRadius.circular(5),
                            ),
                            child: Center(
                              child: Text(
                                'Confirm',
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
              ),
            ),
          ),
        ),
      ),
    );
  }
}
