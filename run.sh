sudo dnf install gdm gnome-terminal 
sudo dnf remove gnome-tour malcontent
sudo dnf install thunar

# sudo dnf install dnf-plugins-core

sudo dnf config-manager --add-repo https://brave-browser-rpm-release.s3.brave.com/brave-browser.repo

sudo dnf install brave-origin

sudo systemctl enable gdm --now
sudo systemctl set-default graphical.target
