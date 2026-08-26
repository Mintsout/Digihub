export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* यह लाइन आपकी वेबसाइट को सुंदर डिज़ाइन (Tailwind CSS) देगी */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
