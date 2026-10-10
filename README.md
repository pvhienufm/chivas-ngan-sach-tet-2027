# Google Ads report · ruousi.vn

Slideshow báo cáo hiệu quả Google Ads cho giai đoạn **09/09/2026 — 08/10/2026**.

## Chạy local

Mở `index.html` trực tiếp trong trình duyệt, hoặc chạy một static server:

```bash
python3 -m http.server 8000
```

Sau đó mở http://localhost:8000.

## Điều hướng

- Nút mũi tên ở góc phải dưới.
- Phím `←` / `→`, `PageUp` / `PageDown`, `Home` / `End`.
- URL hash `#slide-1` đến `#slide-6` có thể dùng để chia sẻ từng slide.

## Nguồn dữ liệu

Các số liệu đã được transcribe từ ảnh chụp Google Ads và context người dùng cung cấp, lưu tại [`data/google-ads-report.json`](data/google-ads-report.json).

## GitHub Pages

Workflow [`pages.yml`](.github/workflows/pages.yml) sẽ deploy site khi push lên branch `master` hoặc `main`. Repo hiện cần được nối với một remote GitHub trước khi push.
