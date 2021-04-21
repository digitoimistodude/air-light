# Install node for WSL if not installed
if [ ! -d .nvm/versions/node ]; then
  echo "${YELLOW}Installing/updating npm${TXTRESET}"
  sudo apt-get install curl -y
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
  nvm install node
  nvm install --lts
fi

if [ ! -f /usr/bin/git ]; then
  echo "${YELLOW}Git is not installed. Installing git${TXTRESET}"
  sudo apt install git -y
fi
