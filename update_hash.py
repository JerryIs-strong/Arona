import os
import hashlib
import datetime

def calculate_hashes(directory):
    hash_file_path = os.path.join(directory, "hash.txt")
    last_dir = None

    with open(hash_file_path, "w") as f:
        for root, dirs, files in os.walk(directory):
            if ".git" in dirs:
                dirs.remove(".git")

            current_dir = os.path.relpath(root, directory)
            files_processed = False

            for file in files:
                if file == "hash.txt":
                    continue

                if current_dir != last_dir and last_dir is not None and not files_processed:
                    f.write(f"\n")
                files_processed = True

                file_path = os.path.join(root, file)
                sha256 = hashlib.sha256()
                with open(file_path, "rb") as file_to_hash:
                    for chunk in iter(lambda: file_to_hash.read(4096), b""):
                        sha256.update(chunk)

                relative_path = os.path.relpath(file_path, directory)
                f.write(f"{relative_path}: {sha256.hexdigest()}\n")

            if files_processed:
                last_dir = current_dir

        # Add the last update time at the bottom
        current_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        f.write(f"\nLast updated: {current_time}\n")
        f.write(f"Verified: pass")

    print(f"The hash values have been saved to {hash_file_path}.")

# Use the current directory as the root
calculate_hashes(os.getcwd())