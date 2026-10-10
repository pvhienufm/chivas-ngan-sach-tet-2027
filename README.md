# Google Ads proposal · Chivas · ruousi.vn

Slideshow đề xuất Google Ads cho Chivas: **tháng 10/2026 → Tết 2027**.

Deck dùng dữ liệu campaign Chivas Search + PMAX năm 2025–2026 và Keyword Planner làm benchmark để xây kế hoạch. Số liệu lịch sử là hướng tham chiếu; cần đối soát GA4/order data trước khi chốt KPI doanh thu.

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

Các số liệu đã được transcribe từ ảnh chụp Google Ads và context người dùng cung cấp, lưu tại [`data/google-ads-report.json`](data/google-ads-report.json). Tết 2027 — Đinh Mùi: **06/02/2027**; Tết 2026 — Bính Ngọ: **17/02/2026**.

## GitHub Pages

Workflow [`pages.yml`](.github/workflows/pages.yml) sẽ deploy site khi push lên branch `master` hoặc `main`. Repo hiện cần được nối với một remote GitHub trước khi push.
