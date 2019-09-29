import JWT from 'jsonwebtoken';
import config from '../config/config';

export default function Access(role) {
    return function(req, res, next) {
        const token = req.headers['x-access-token'];

        if (!token) {
            return res.status(403).send({ Auth: false, message: 'No token provided' });
        } else {
            JWT.verify(token, config.secret, function (err, decoded) {
                if (err) {
                    return res.status(500).send({ auth: false, message: 'Failed to authenticate Token' });
                } else {
                    req.user = decoded.id;
                    
                    if (decoded.access >= role) {
                        next();
                    } else {
                        return res.status(401).send({ message: 'Not authorized' });
                    }
                
                }
            });
        }
    }
}