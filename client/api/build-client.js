import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // we are on the server!
    // requests should be made to http://SERVICENAME.NAMESPACE.svc.cluster.local/ROUTE
    // kubectl get namespace, then kubectl get services -n NAMESPACE (servicename is of LoadBalancer type)
    return axios.create({
      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers
    });
  } else {
    // we are on the broswer!
    // requests should be made to '' as root url which broswer does automatically
    return axios.create({
      baseURL: '/'
    });
  }
};