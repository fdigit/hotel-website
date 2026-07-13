export const site = {
  name: "JAVIN Hotels Limited",
  shortName: "JAVIN Hotels",
  location: "Rumuepirikom, Port Harcourt",
  address:
    "No. 1 Ejekwu Wike Close, Off Ada George, Rumuepirikom, Port Harcourt, Rivers State, Nigeria.",
  phones: [
    { display: "+234 0907 9002 726", href: "tel:+2349079002726" },
    { display: "+234 0704 3125 989", href: "tel:+2347043125989" },
  ],
  whatsapp: "https://wa.me/2349079002726",
  instagram: "https://www.instagram.com/javinhotels/",
  facebook:
    "https://www.facebook.com/profile.php?id=61590248987585&sk=photos_albums",
} as const;

export const hotelImages = {
  standard:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB4mA0vp1goua0hCDpf1CEn9dx2W5_NhbIXPDZs4-pawKxr0-u4o7wpsUHTyvRCM94KAaPCzJM6iACFQ_uOPn46i7WiPhWC6VAGjIyeqagGVNWTXgB3jdx9icEJ8NOVJLp4CymY25WTKkZSzlQL9Fv1DmPFokcQea9NLSsjUbjJyCPW3kevFr9rjol61URlfMAN0f-5s_t0wNV2TGzaY3Ym812NmpHX6iFT7c7kzrQ2Zg3bGLAR6MgsHzGcyPAaUM_BrhaA4SsmdTf5",
  deluxe:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAWqJNdRvykk2m0NVNDR7u4lvVq42aKKYvL6vGXuwv7nxwEwz98Cd5yIatYWTU046tS6HuK-7D0kTvJN0rvXMTULr3TQlia6zXf9gST7YG02rGnU4ZRed7E6qXP2-lx7V8IOuQcGms0m-TeDx2Rzl1lcY3OgT7zQK2Mchhk-dINthKyd2I2bvtjpYMO7rAbMMCMfYhiIWpW_68YXT_lObjF7zdK6kvKnIdBKj7ZrW2QRaU2OFovpwQwSpgzn5jt8J5CMWk4DzEOM8pO",
  executive:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDVmCgiHEXAVsd9QQwZkvkSnCH4d1ckmt4uIWnXMHh8PSfYld1wqeuKyRUu3AYAcpVoD0MmAImStqSXNePSfSdaWGi3BP2x42FRWawx35gMiRQ6Vh6sz2k8v7CiKsXPGQjjFiVuB76EWwD6dg6-KmS54LQBkOO6egEvwPvbKB7MMJgt1rWZo6eyg7Yn6tcNUWKjUxPZE15S2uJbIBtWqOOurNZdyqXvJVvQnJT2T-Hv-SURMFw-OmFBSNtfk6lN8rOCBe4hCEkTLM_N",
  presidential:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA10STV3o86QdvSH3Um9v8OSoXHfLTRMLF6twSC27TLjLTGIacilJJT87TClKN4XI3qRsO95R1ISeKgA8uOgNsu3hah6vrHXyEuDLeArqrp3l2OE2fYOnwQEBP8ga3v7KPuqSyr6C94e7_--31Ome_ILEkkuQ2hmvuCUBPk5DM4RW_7PLlC2muuhHRjCOOvqgOw6g5tuOV2uY1zF3Ya1yI9W-rD-V5CDxqaEjRtUJsciE4TM-iR-gTsq8SyFi9epelvhWGD8VgeItDm",
} as const;

export function whatsappUrl(message: string) {
  return `${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
