# 이태현 포트폴리오 (v5)

에코마케팅 지원용 싱글페이지 포트폴리오. `index.html`을 브라우저에서 바로 열면 됩니다.

## 폴더 구조
- `index.html` — 메인 페이지
- `support.js`, `image-slot.js` — 런타임 스크립트
- `_ds/` — 디자인 시스템(폰트·색상·컴포넌트). 지우면 스타일 깨짐
- `icons/` · `assets/` · `uploads/` — 이미지 에셋
- `videos/` — 브랜드 필름 mp4 2개
- 모든 파일명은 영문/숫자로 정리됨(한글·공백·괄호 없음)

## GitHub 업로드 방법

개별 파일은 모두 25MB 미만이지만, 전체 용량이 약 80MB라 **웹 브라우저에서 한 번에 드래그하면 실패**할 수 있습니다. 아래 둘 중 하나로 올리세요.

### 방법 A — GitHub Desktop (가장 확실, 한 번에 끝)
1. https://desktop.github.com 설치 → 로그인
2. File → New repository (또는 기존 저장소 클론)
3. 이 폴더 안의 **모든 항목**을 저장소 폴더로 복사
4. Commit → Push. 끝.

### 방법 B — 웹 브라우저에서 폴더별로 나눠 업로드
저장소 → Add file → Upload files 에서 **아래 순서로 나눠서** 커밋하세요(한 번에 다 올리지 말 것):
1. `index.html`, `support.js`, `image-slot.js`, `README.md`, `scent-parallax.webp`
2. `_ds/` 폴더
3. `icons/` + `assets/` 폴더
4. `uploads/` 폴더 (GIF 포함, 약 40MB — 실패하면 GIF 파일만 따로 한 번 더)
5. `videos/` 폴더 (mp4 2개)

## GitHub Pages 배포
저장소 Settings → Pages → Branch: main / root 저장 → 잠시 후 생성된 주소로 접속.

## 참고
- 유튜브 임베드 영상(봉을 아십니까, AI 파이프라인, 쇼츠)은 인터넷 연결 시 재생됩니다.
- `uploads/`의 GIF(지하철 인디케이터 등)와 `videos/`의 mp4가 용량 대부분을 차지합니다. 더 가볍게 만들고 싶으면 GIF→MP4 변환 또는 해상도 축소를 권장합니다.
