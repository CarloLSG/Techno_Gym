import http from "@/shared/services/http-common";

export class TreadmillsApiService {
    getAllCenters() {
        return http.get("/centers");
    }
    getCenterById(id) {
        return http.get(`/centers/${id}`);
    }

    getAllHealthChecks() {
        return http.get("/health-checks");
    }
    getHealthCheckById(id) {
        return http.get(`/health-checks/${id}`);
    }

    getAllTreadmills() {
        return http.get("/treadmills");
    }

    getTreadmillById(id) {
        return http.get(`/treadmills/${id}`);
    }
    createTreadmill(data) {
        return http.post("/treadmills", data);
    }
    getHealthCheckByTreadmillId(id) {
        return http.get(`/treadmills/${id}/health-checks`);
    }

}