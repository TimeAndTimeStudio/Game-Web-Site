sudo dnf install gdm gnome-terminal nautilus google-noto-sans-thai-fonts google-noto-sans-cjk-fonts tar wireguard-tools fuse fuse-libs
sudo dnf remove gnome-tour malcontent-control gnome-remote-desktop

sudo dnf config-manager addrepo --from-repofile=https://brave-browser-rpm-release.s3.brave.com/brave-browser.repo

sudo dnf install brave-origin

mkdir Downloads
cd Downloads
wget https://game.timeandtime.online/019b913a-a484-7237-b907-2444e37e22e2.png
wget https://game.timeandtime.online/horizontal%20pic.jpg

sudo dnf install plymouth-system-theme
sudo plymouth-set-default-theme -R bgrt
sudo systemctl set-default graphical.target

wget https://github.com/moonlight-stream/moonlight-qt/releases/download/v6.1.0/Moonlight-6.1.0-x86_64.AppImage

sudo systemctl enable gdm --now
