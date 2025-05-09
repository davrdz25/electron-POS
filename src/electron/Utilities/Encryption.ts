import crypto from 'crypto';

export default class Encryption {
    private static key: Buffer = crypto.scryptSync('.:C0r3W4v3:.', '.:C0r3W4v3S4lt:.', 32);

    public static encrypt(text: string): string {
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv('aes-256-cbc', this.key, iv);
        const encrypted = Buffer.concat([
            cipher.update(text, 'utf8'),
            cipher.final()
        ]);

        return iv.toString('hex') + ':' + encrypted.toString('hex');
    }

    public static decrypt(encryptedText: string): string {
        const [ivHex, encryptedHex] = encryptedText.split(':');
        const iv = Buffer.from(ivHex, 'hex');
        const encrypted = Buffer.from(encryptedHex, 'hex');

        const decipher = crypto.createDecipheriv('aes-256-cbc', this.key, iv);
        const decrypted = Buffer.concat([
            decipher.update(encrypted),
            decipher.final()
        ]);

        return decrypted.toString('utf8');
    }
}
