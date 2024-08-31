# https://playwright.dev/python/docs/docker#pull-the-image
FROM mcr.microsoft.com/playwright:v1.46.0-jammy

#
# 1. ディストリビューションの設定
#
#     1.1. 日本語に対応させます。
#
#         1. locale がない（locale -a）ため ja_JP.UTF-8 を生成します
#         2. LANG を設定します
#         # 3. LANGUAGE を設定します
#         # 4. デフォルトロケールを変更します（2.、3. を実施していない場合エラー）
#         # 5. LC_ALL を設定します（4. を実施していない場合エラー）
#
RUN apt update && \
    apt install -y locales && \
    apt clean && \
    locale-gen ja_JP.UTF-8 && \
    localedef -f UTF-8 -i ja_JP ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
# ENV LANGUAGE ja_JP:ja
# RUN update-locale LANG=ja_JP.UTF-8
# ENV LC_ALL ja_JP.UTF-8

#
#     1.2. Debian にないユーティリティをインストールします。
#
RUN apt update && \
    apt install -y vim curl wget git && \
    apt clean && rm -rf /var/lib/apt/lists/*
#
#     1.3. Playwright用のパッケージをインストールします。（Google Chrome）
#
RUN npx playwright install chrome
# RUN cd /usr/local/src && \
#     wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
#     apt -y install ./google-chrome-stable_current_amd64.deb

#
# 2. アプリケーションの設定
#
#     2.1. アプリケーションの実行ユーザは pwuser です。
#
USER pwuser
