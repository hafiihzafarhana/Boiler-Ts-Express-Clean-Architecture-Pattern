/src
  /domain               # Lapisan Domain - Inti logika bisnis aplikasi
    /entities           # Definisi entitas bisnis, biasanya class atau interface
      User.ts
      Product.ts
    /repositories       # Interface untuk repositori yang menggambarkan kontrak data
      UserRepository.ts
      ProductRepository.ts
    /services           # Layanan bisnis murni tanpa ketergantungan pada framework
      UserService.ts
      ProductService.ts
    /valueObjects       # Nilai objek yang memiliki aturan bisnis
      Email.ts
      PhoneNumber.ts
    /exceptions         # Custom error atau exception untuk domain
      UserNotFoundException.ts
      InvalidEmailException.ts

  /application          # Lapisan Application - Orkestrasi antar komponen domain
    /useCases           # Use cases aplikasi atau interactor (logika aplikasi)
      CreateUser.ts
      GetUserById.ts
      UpdateProduct.ts
    /dtos               # Data Transfer Objects (DTO) untuk komunikasi antar lapisan
      CreateUserDTO.ts
      UpdateProductDTO.ts
    /interfaces         # Antarmuka lapisan Application ke lapisan luar
      UserRepositoryInterface.ts
      ProductRepositoryInterface.ts

  /infrastructure       # Lapisan Infrastruktur - Detail implementasi eksternal
    /database           # Koneksi, konfigurasi, dan model database (ORM, etc)
      /models
        UserModel.ts
        ProductModel.ts
      DatabaseConnection.ts
    /repositories       # Implementasi repositori yang terhubung ke database atau storage
      UserRepositoryImpl.ts
      ProductRepositoryImpl.ts
    /external           # Integrasi dengan layanan eksternal atau API lain
      PaymentService.ts
      NotificationService.ts

  /presentation         # Lapisan Presentasi - Interaksi pengguna (misalnya API, CLI)
    /controllers        # Controller atau handler untuk menangani request pengguna
      UserController.ts
      ProductController.ts
    /routes             # Definisi routing untuk endpoint API atau route lainnya
      UserRoutes.ts
      ProductRoutes.ts
    /middleware         # Middleware untuk autentikasi, validasi, dll.
      AuthMiddleware.ts
      ValidationMiddleware.ts

  /config               # Konfigurasi aplikasi, seperti environment variable
    default.ts
    production.ts
    development.ts

  /shared               # Kode yang dapat digunakan ulang di berbagai lapisan
    /utils              # Fungsi utilitas yang sering digunakan
      Logger.ts
      Formatter.ts
    /types              # Definisi tipe umum atau interface
      GlobalTypes.ts
      ApiResponse.ts
